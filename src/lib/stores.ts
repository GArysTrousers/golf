import { dev } from "$app/environment";
import PocketBase from "pocketbase";

import { writable } from "svelte/store";

export const pbUrl = dev ? "http://localhost:8090" : "http://golf.benlee.me"

export const pb = new PocketBase(pbUrl)

export const user = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
  user.set(pb.authStore.model)
})