# VPN Web-Services

A simple web service enabling a VM to generate and retrieve a user's VPN configuration.

## Requirements

To operate, this project requires the following elements :

- Run on a Windows Server as administrator (from the root folder in a powershell)
- Server must have Node.JS 20.11.0 LTS or higher installed
- The server's network configuration must allow access to the web-services listening port (default `3000`).
- The server must allow powershell script execution on its system (`.ps1` script).

## Installation

To install this project on your work environment, simply run :

```bash
  git clone <project_url>
```

```bash
  cd <project_folder>
```

```bash
  npm install
```

## Environment Variables

To run this project, you'll need to set the environment variables in an `.env` file.

Start by duplicating the `.env.demo` file to `.env` and customize :

- `PORT` : web services listening port (default `3000`)

- `PRIVATE_KEY_PATH` : path to Easy-RSA user private key storage folder for OpenVPN (`.key`)

- `ISSUED_PATH` : path to Easy-RSA user certificate storage folder for OpenVPN (`.crt`)

## Configuration

You must tell the VPN user creation script the path to the Easy-RSA root folder.

To do this, edit the `script/create-user.ps1` file and adjust the `$workingDirectory` variable accordingly.

## Launch

To launch the web-services, use :

```bash
  npm run start
```

To launch the web-services in developer (watch mode), use :

```bash
  npm run start:dev
```

## Deployment

When you want to build the project for production, use :

```bash
  npm run build
```

## API Reference

#### Generate user VPN config files

```http
  POST /api/v1/config
```

| Body Parameter | Type     | Description           |
| :------------- | :------- | :-------------------- |
| `user`         | `string` | User name with domain |

## Authors

Project by Supinfo Nantes students for the Lyon metropolis.

- [Supinfo](https://www.supinfo.com/)
- [Grand Lyon](https://www.grandlyon.com/)
