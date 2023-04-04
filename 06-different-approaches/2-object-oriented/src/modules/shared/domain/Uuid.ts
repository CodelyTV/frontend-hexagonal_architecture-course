export class Uuid {
	constructor(readonly value: string) {
		this.ensureIsValidUuid(value);
	}

	private ensureIsValidUuid(value: string): void {
		const regexExp =
			/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

		if (!regexExp.test(value)) {
			throw new Error(`The value [${value}] is not a valid uuid`);
		}
	}
}
