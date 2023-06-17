import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityCanvas() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./FinalGameV6/Build/FinalGameV6.loader.js",
        dataUrl: "./FinalGameV6/Build/FinalGameV6.data",
        frameworkUrl: "./FinalGameV6/Build/FinalGameV6.framework.js",
        codeUrl: "./FinalGameV6/Build/FinalGameV6.wasm",
    });

    return (
        <Unity unityProvider={unityProvider} style={{ width: 462, height: 820 }} />
            {/* eslint-disable-next-line react/button-has-type */}
    </>
);
}

export { UnityCanvas };