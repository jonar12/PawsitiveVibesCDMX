import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityCanvas() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./build/Build/build.loader.js",
        dataUrl: "./build/Build/build.data",
        frameworkUrl: "./build/Build/build.framework.js",
        codeUrl: "./build/Build/build.wasm",
    });

    return (
        <Unity unityProvider={unityProvider} style={{ width: 462, height: 820 }} />
    );
}

export { UnityCanvas };