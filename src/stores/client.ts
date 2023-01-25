import { writable, get } from "svelte/store";
import type { MicroStacksClient } from "@micro-stacks/client";
import { getAccount } from "@micro-stacks/svelte";

export const client = writable({} as MicroStacksClient);
export const get_client = () => get(client);
export const get_account = getAccount;
