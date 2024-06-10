const { execSync } = require('child_process');
const fs = require('fs');

if (process.argv.length < 4) {
    console.error('Usage: node wsdl2openapi.js <wsdl_url> <output_file>');
    process.exit(1);
}

const wsdlUrl = process.argv[2];
const outputFileName = process.argv[3];
const swaggerFileName = 'service.swagger.json';

try {
    // Step 1: Convert WSDL to Swagger 2.0 using soap-converter
    console.log('Converting WSDL to Swagger 2.0...');
    execSync(`soap-converter --input ${wsdlUrl} --target SwaggerJSON --output ${swaggerFileName}`, { stdio: 'inherit' });

    // Step 2: Convert Swagger 2.0 to OpenAPI 3.0.x using swagger2openapi
    console.log('Converting Swagger 2.0 to OpenAPI 3.0.x...');
    execSync(`swagger2openapi --outfile ${outputFileName} ${swaggerFileName}`, { stdio: 'inherit' });

    // Step 3: Patch the OpenAPI file to include the full WSDL URL in the servers object
    console.log('Patching the OpenAPI file...');
    const openApiData = JSON.parse(fs.readFileSync(outputFileName, 'utf8'));

    if (openApiData.servers && openApiData.servers.length > 0) {
        openApiData.servers[0].url = wsdlUrl;
    } else {
        openApiData.servers = [{ url: wsdlUrl }];
    }

    fs.writeFileSync(outputFileName, JSON.stringify(openApiData, null, 2));
    console.log(`OpenAPI file created: ${outputFileName}`);
} catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
}