import { Injectable } from "@angular/core";
import dayjs, { Dayjs } from "dayjs";
import isBeetwen from "dayjs/plugin/isBetween"
import 'dayjs/locale/es';
dayjs.locale('es')
dayjs.extend(isBeetwen)

@Injectable({ providedIn: "root" })
export class ThemeService {


    private templates: Map<string, { month: number; day: number }[]> = new Map([
        ["valentine",
            [
                { month: 1, day: 12 },
                { month: 1, day: 15 }
            ]
        ],
        ["halloween",
            [
                { month: 9, day: 25 },
                { month: 10, day: 3 }
                // { month: 10, day: 25 },
                // { month: 10, day: 24 }
            ]
        ],
        ["winter",
            [
                { month: 10, day: 25 },
                { month: 11, day: 30 }
            ]
        ]
    ])


    private isTodayBetween(startDate: { month: number, day: number },
        endDate: { month: number, day: number }
    ) {
        const year = dayjs().year()
        const start = dayjs(`${new Date(year, startDate.month, startDate.day)}`)
        const end = dayjs(`${new Date(year, endDate.month, endDate.day)}`)
        const today = dayjs()
        return today.isBetween(start, end, 'day', '[]')
    }

    public getTheme() {
        for (const [key, range] of this.templates) {
            if (!range || range.length < 2) continue;
            const [start, end] = range
            if (this.isTodayBetween(start, end)) {
                return key;
            }
        }
        return "default"
    }

}