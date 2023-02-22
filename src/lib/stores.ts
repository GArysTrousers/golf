import { dev } from "$app/environment";
import PocketBase from "pocketbase";

import { writable } from "svelte/store";

export const pb = new PocketBase(dev ? "http://localhost:8090" : "https://website.url")

export const user = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
  user.set(pb.authStore.model)
})