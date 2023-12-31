import Image from "next/image";
import config from "@config/config.json";

export function DownloadButton() {
  return <a className={"inline-block mt-8"} href={config.appStore.apple}><Image width={178} height={48} src="./images/download_from_apple_store.svg" alt="Download GYM on App Store" /></a>
}