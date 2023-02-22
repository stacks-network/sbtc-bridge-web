export type Message = {
	btcAddress: string,
	amount: number,
	signature?: Uint8Array | string
};
