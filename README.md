# wsdl2swagger2openapi

## Description

`wsdl2swagger2openapi` is a Node.js tool designed to convert a WSDL file into an OpenAPI v3.0.x file. This is achieved by chaining two existing tools: `soap-converter` and `swagger2openapi`. The purpose of this tool is to facilitate the conversion from WSDL to OpenAPI v3.0.x, which can then be fed into Burp Suite's API scanner.

## Prerequisites

- Node.js (version 12 or later)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/xonoxitron/wsdl2swagger2openapi.git
    cd wsdl2swagger2openapi
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the tool with the following command:
    ```sh
    node wsdl2openapi.js <wsdl_url> <output_file>
    ```

    - `<wsdl_url>`: The URL of the WSDL file.
    - `<output_file>`: The name of the final OpenAPI v3.0.x output file (e.g., `output_openapi.json`).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Issues

If you encounter any issues, please open an issue in this repository.

## Acknowledgments

- [soap-converter](https://www.npmjs.com/package/soap-converter)
- [swagger2openapi](https://www.npmjs.com/package/swagger2openapi)

---

Feel free to customize the repository details, such as the repository URL and your username, in the documentation.