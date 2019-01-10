import { ErrorHandler, Inject, forwardRef, NgZone } from "@angular/core";
import { MatSnackBar } from '@angular/material';

export class GlobalErrorHandler extends ErrorHandler {
	constructor(
		@Inject(forwardRef(() => MatSnackBar))
		private snackBar: MatSnackBar,
		@Inject(forwardRef(() => NgZone))
		private zone: NgZone
	) {
		super();
	}

	handleError(error: ErrorEventHandler) {
		if (error instanceof Error) {
			this.zone.run(() => {
				this.snackBar.open(error.message, 'OK', {
					duration: 20000,
					verticalPosition: "top"
				});
			});
			return;
		}
		super.handleError(error);
	}
}