import { useRouter } from "next/router";

export function goToRoute(route: string) {
    const router = useRouter();
    router.push(route);
}
