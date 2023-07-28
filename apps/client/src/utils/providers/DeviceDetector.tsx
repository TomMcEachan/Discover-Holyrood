"use client";

import useDeviceDetector from "@/utils/hooks/useDeviceDetector";

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
    const currentDevice = useDeviceDetector();

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
