# Bemafi32

Historical Node.js integration with Bematech fiscal-printer DLLs through FFI. The wrapper exposes receipt and fiscal-report operations and selects the DLL name according to the process architecture.

## Historical maintenance status

Preserved as a legacy engineering reference. The original implementation dates from 2018; current Node.js versions, native dependencies, printer drivers and hardware compatibility have not been validated in this documentation review. This repository is not a statement of current fiscal compliance.

## Original setup notes

The notes below are retained for historical context and may require adaptation to a current environment.

Copiar o Repositório com Git Clone para a pasta dos node_modules do projeto

Install all the required tools and configurations using Microsoft's windows-build-tools using npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator).
