import { writable } from "svelte/store";
import type { UserSession } from "@stacks/connect";

export const session = writable({} as UserSession);
