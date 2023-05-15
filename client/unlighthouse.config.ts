/// <reference types="@unlighthouse/webpack" />

import Unlighthouse from "@unlighthouse/webpack";

export default {
    exclude: ["/.*?pdf"],
    plugins: [
        Unlighthouse({
            scanner: {
                // simulate a desktop device
                device: "desktop",
            },
        }),
    ],
};
