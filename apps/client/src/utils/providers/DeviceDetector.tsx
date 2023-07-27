"use client";

import useMobileDetect from "@/utils/device/deviceDetection";
import { is } from "cypress/types/bluebird";

export type DeviceType = {
    isMobile?: boolean;
    isDesktop?: boolean;
    isAndroid?: boolean;
    isIos?: boolean;
    isSSR?: boolean;
    children: React.ReactNode;
};

const DeviceDetector = ({
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
    children,
}: DeviceType) => {
    const currentDevice = useMobileDetect();

    if (currentDevice.isIos()) {
        return isIos && children;
    } else if (currentDevice.isAndroid()) {
        return isAndroid && children;
    } else if (currentDevice.isDesktop()) {
        return isDesktop && children;
    } else if (currentDevice.isMobile()) {
        return isMobile && children;
    } else if (currentDevice.isSSR()) {
        return isSSR && children;
    }
};

export default DeviceDetector;
