**Generating the Client**

**Environment Variables:**

- `JAVA_HOME`: Set the path to your Java installation directory (e.g., `/usr/lib/jvm/java-17-openjdk`).
- `DEFAULT_JVM_OPTS` (Optional): Customize Java virtual machine options (e.g., `--add-opens java.base/java.util=ALL-UNNAMED`).

**JavaScript Generator Documentation:**

- Refer to the OpenAPI Generator's JavaScript generator documentation for detailed guidance: [https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/javascript.md](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/javascript.md)

**Building OpenAPI Generator:**

1. **Navigate to the OpenAPI Generator directory:**
   ```bash
   cd openapi-generator
   ```
2. **Build the tool:**
   ```bash
   ./mvnw clean install -Dmaven.wagon.http.ssl.insecure=true
   ```
   - `maven.wagon.http.ssl.insecure=true` (Optional): Disables SSL certificate verification (use with caution).

**Generating API Clients:**

**1. JavaScript Client (Short Output):**

```bash
clear && rm /mnt/c/Projects/Iside/fe-client/api-client-js & npx @openapitools/openapi-generator-cli generate --config ./openapi-generator-js.config.yaml | grep -E '(ERR|WARN|TemplateManager|[Oo]neOf|[Aa]llOf|Response|00)'
```

- Fetches the OpenAPI Generator CLI using `npx`.
- Generates the client using the configuration file `openapi-generator-js.config.yaml`.
- Pipes the output through `grep` to filter for errors, warnings, or specific keywords.
- Removes any previous generated client files (`/mnt/c/Projects/Iside/fe-client/api-client-js`).

**2. TypeScript Client with Fetch API (Short Output):**

```bash
clear && rm -r /mnt/c/Projects/Iside/fe-client/api-client-ts-fetch*
java -jar ~/projects/_GH/_java/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate --config /mnt/c/Projects/Iside/fe-client/openapi-generator-tsfetch.config.yaml | grep -E '(ERR|WARN|TemplateManager|[Oo]neOf|[Aa]llOf|Response|00)'
```

- Uses the Java-based OpenAPI Generator CLI (`java -jar`).
- Generates the client using the configuration file `openapi-generator-tsfetch.config.yaml`.
- Filters the output as in the previous command (JavaScript client).
- Removes previous generated client files (`/mnt/c/Projects/Iside/fe-client/api-client-ts-fetch*`).

```bash
cd fe-client
clear && rm -r /mnt/c/Projects/Iside/fe-client/api-client-ts-fetch*
# this command doesn\'t work
npx @openapitools/openapi-generator-cli@latest generate --config ./openapi-generator-tsfetch.config.yaml
```

Once the package is built, the package is created IN POWERSHELL by:

```powershell
# go in the package dir
cd api-client-ts-fetch
# update and install all packages
pnpm update
pnpm install
# build the project
pnpm build
# create and copy the package
pnpm pack --pack-destination ~\projects\iside && cp ~\projects\iside\iside-open-food-facts-api-client-tsfetch-*  C:\Projects\Iside\
```

**3. Custom Client Generation:**

- Follow the documentation in [https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/javascript.md](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/javascript.md) to create custom configuration files.
- Refer to the generated client structure for customization options.

**Certificate Installation in WSL2 (Optional):**

1. **Export the certificate in base64 CER format from Windows.**
2. **Create the directory `/usr/local/share/ca-certificates/extra` in WSL2 if it doesn't exist.**
3. **Rename the CER file to a CRT extension and copy it to `/usr/local/share/ca-certificates/extra` in WSL2.**
4. **Update the certificate list:**
   ```bash
   sudo update-ca-certificates
   ```
   - If unsuccessful, try `sudo dpkg-reconfigure ca-certificates` followed by `sudo update-ca-certificates`.

**Polyfills and Browser Compatibility:**

- Consider using polyfills to ensure compatibility with older browsers: [https://vitejs.dev/guide/build.html#browser-compatibility](https://vitejs.dev/guide/build.html#browser-compatibility)
- Reference `browserlist` for detailed browser compatibility configuration: [https://dev.to/meduzen/when-vite-ignores-your-browserslist-configuration-3hoe](https://dev.to/meduzen/when-vite-ignores-your-browserslist-configuration-3hoe)

**Scanners:**

- Explore these scanner libraries for barcode scanning functionality:
  - [https://github.com/zxing-js/library](https://github.com/zxing-js/library)
  - [https://github.com/serratus](https://github.com/serratus)
