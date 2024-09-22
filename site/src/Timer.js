// Timer-Klasse zur Verwaltung der Zeit
export class Timer {
    constructor(duration, onTick, onComplete) {
        this.duration = duration;
        this.timeLeft = duration;
        this.interval = null;
        this.onTick = onTick;
        this.onComplete = onComplete;
    }

    // Starten des Timers
    start() {
        this.timeLeft = this.duration;
        this.interval = setInterval(() => {
            this.timeLeft--;
            this.onTick(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.stop();
                this.onComplete();
            }
        }, 1000); // 1-Sekunden-Intervall
    }

    // Stoppen des Timers
    stop() {
        clearInterval(this.interval);
    }

    // Zurücksetzen des Timers
    reset() {
        this.timeLeft = this.duration;
        this.stop();
    }
}