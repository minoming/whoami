import * as React from "react";

const YarnLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={120} height={60} {...props}>
    <g fill="#2c8ebb">
      <path d="M72.227 29.896c-.693 2.4-1.8 4.122-3.048 5.507V23.246c0-.83-.727-1.524-1.87-1.524-.485 0-.9.242-.9.59 0 .242.14.45.14 1.108v5.577c-.416 2.425-1.455 4.676-2.84 4.676-1.005 0-1.593-1.005-1.593-2.875 0-2.9.38-4.434 1.005-6.997.14-.52 1.143-1.905-.554-1.905-1.836 0-1.593.693-1.836 1.282 0 0-1.16 4.122-1.16 7.794 0 3.014 1.264 4.988 3.585 4.988 1.49 0 2.563-1.005 3.395-2.4v4.4c-2.286 2.01-4.295 3.776-4.295 7.274 0 2.217 1.386 3.983 3.325 3.983 1.767 0 3.602-1.282 3.602-4.92v-5.992c1.87-1.628 3.88-3.672 5.057-7.7.035-.14.035-.312.035-.346 0-.658-.658-1.42-1.212-1.42-.346 0-.623.312-.83 1.04zm-6.65 17.146c-.554 0-.9-.83-.9-1.905 0-2.078.762-3.395 1.87-4.538v3.706c0 .658.14 2.736-.97 2.736z" />
      <path d="M82.168 33.637c-.83 0-1.178-.83-1.178-1.593v-5.715c0-.83-.727-1.524-1.87-1.524-.485 0-.9.242-.9.59 0 .242.14.45.14 1.108v5.334c-.38.97-1.005 1.8-1.94 1.8-1.212 0-1.974-1.04-1.974-2.84 0-4.988 3.083-7.24 5.715-7.24.346 0 .693.07 1.005.07.346 0 .45-.208.45-.797 0-.9-.658-1.455-1.593-1.455-4.226 0-8.244 3.533-8.244 9.318 0 2.944 1.42 5.23 4.122 5.23 1.316 0 2.286-.623 2.98-1.42.52.83 1.455 1.42 2.667 1.42 2.98 0 4.364-3.117 4.953-5.404.035-.14.035-.208.035-.242 0-.658-.658-1.42-1.212-1.42-.346 0-.693.312-.83 1.04-.312 1.524-.935 3.74-2.32 3.74z" />
      <path d="M92.18 35.923c2.98 0 4.33-3.117 4.953-5.404 0-.07.035-.14.035-.242 0-.658-.658-1.42-1.212-1.42-.346 0-.693.312-.83 1.04-.312 1.524-.9 3.74-2.494 3.74-.935 0-1.386-.9-1.386-1.87 0-3.464 1.56-7.55 1.56-7.967.14-.797-1.247-1.94-1.663-1.94h-1.8c-.346 0-.693 0-1.836-.14-.38-1.42-1.35-1.836-2.182-1.836-.9 0-1.732.623-1.732 1.593 0 1.005.623 1.732 1.49 2.217-.035 1.767-.173 4.64-.554 6.027-.312 1.178 1.49 2.425 1.94.97.623-2.01.83-5.023.866-6.373h3.014c-1.108 2.98-1.732 5.438-1.732 7.655 0 3.048 1.94 3.95 3.568 3.95z" />
      <path d="M95.26 34.4c0 1.282.97 1.524 1.663 1.524 1.005 0 .97-.83.97-1.49v-5.057c.242-2.736 2.4-5.715 3.395-5.715.658 0 .727.9.727 1.974v7.032c0 1.767 1.074 3.256 2.9 3.256 2.98 0 4.45-3.117 5.04-5.404.035-.14.035-.208.035-.242 0-.658-.658-1.42-1.212-1.42-.346 0-.693.312-.83 1.04-.312 1.524-1.022 3.74-2.407 3.74-.9 0-.9-1.282-.9-1.593v-7.17c0-1.593-.554-3.498-2.875-3.498-1.697 0-2.944 1.49-3.88 3.43v-1.56c0-.83-.727-1.524-1.87-1.524-.485 0-.9.242-.9.59 0 .242.14.45.14 1.108zM32.428 7.572C44.81 7.572 54.856 17.617 54.856 30S44.81 52.428 32.428 52.428 10 42.383 10 30 20.045 7.572 32.428 7.572z" />
    </g>
    <path
      d="M47.686 36.798c-.156-1.23-1.195-2.078-2.53-2.06-1.992.026-3.663 1.056-4.77 1.74a10.38 10.38 0 0 1-1.126.615c.07-1.005.01-2.32-.51-3.767-.632-1.732-1.48-2.797-2.087-3.412.7-1.022 1.663-2.51 2.113-4.815.4-1.966.268-5.023-.623-6.737-.182-.346-.485-.598-.866-.7-.156-.043-.45-.13-1.03.035-.875-1.8-1.178-2-1.41-2.156-.485-.312-1.056-.38-1.593-.182-.72.26-1.334.953-1.914 2.182l-.234.528c-1.1.078-2.832.476-4.295 2.06-.182.2-.537.346-.91.485h.01c-.762.268-1.108.892-1.533 2.018-.59 1.576.017 3.126.615 4.13-.814.727-1.896 1.888-2.468 3.247-.7 1.68-.788 3.325-.762 4.217-.606.64-1.54 1.844-1.645 3.195-.14 1.888.546 3.17.85 3.637a2.41 2.41 0 0 0 .286.364c-.035.234-.043.485.01.745.113.606.494 1.1 1.074 1.41 1.143.606 2.736.866 3.966.25.442.468 1.247.918 2.7.918h.087c.372 0 5.1-.25 6.477-.59a3.15 3.15 0 0 0 1.316-.641c.883-.277 3.325-1.108 5.63-2.598 1.628-1.056 2.19-1.282 3.403-1.576 1.178-.286 1.914-1.36 1.767-2.546zm-2.06 1.273c-1.386.33-2.087.632-3.802 1.75-2.676 1.732-5.603 2.537-5.603 2.537s-.242.364-.944.528c-1.212.294-5.776.546-6.192.554-1.117.01-1.8-.286-1.992-.745-.58-1.386.83-1.992.83-1.992s-.312-.19-.494-.364c-.165-.165-.338-.494-.4-.372-.216.528-.33 1.818-.91 2.4-.797.805-2.303.537-3.195.07-.98-.52.07-1.74.07-1.74s-.528.312-.953-.33c-.38-.59-.736-1.593-.64-2.832.104-1.41 1.68-2.78 1.68-2.78s-.277-2.087.632-4.226c.823-1.948 3.04-3.516 3.04-3.516s-1.862-2.06-1.17-3.914c.45-1.212.632-1.204.78-1.256.52-.2 1.022-.416 1.394-.823 1.862-2.01 4.234-1.628 4.234-1.628s1.126-3.42 2.165-2.754c.32.208 1.472 2.77 1.472 2.77s1.23-.72 1.368-.45c.745 1.446.83 4.21.502 5.888-.554 2.77-1.94 4.26-2.494 5.196-.13.216 1.49.9 2.51 3.732.944 2.59.104 4.763.25 5.005l.035.06s1.082.087 3.256-1.256c1.16-.72 2.537-1.524 4.105-1.54 1.515-.026 1.593 1.75.45 2.026z"
      fill="#fff"
    />
  </svg>
);

export default YarnLogo;