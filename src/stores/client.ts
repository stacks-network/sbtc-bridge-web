import { writable, get } from "svelte/store";
//import type { MicroStacksClient } from "@micro-stacks/client";
//import { getAccount } from "@micro-stacks/svelte";
import type { UserSession } from "@stacks/connect";

export const session = writable({} as UserSession);
//export const get_client = () => get(client);
//export const get_account = getAccount;
