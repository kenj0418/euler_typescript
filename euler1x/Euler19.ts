/*
  1 Jan 1900 was a Monday.
  Thirty days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

class MyDate {
  private static monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  private readonly absoluteDayNum: number;
  private readonly month: number;
  private readonly year: number;

  constructor(absoluteDayNum: number, startMonth: number, startYear: number) {
    this.absoluteDayNum = absoluteDayNum;
    this.month = startMonth;
    this.year = startYear;
  }

  isLeapYear(): boolean {
    if (this.year % 4 != 0) {
      return false;
    } else if (this.year % 400 == 0) {
      return true;
    } else {
      return this.year % 100 != 0;
    }
  }

  nextMonth(): MyDate {
    if (this.month == 12) {
      return new MyDate(
        this.absoluteDayNum + MyDate.monthDays[11],
        1,
        this.year + 1
      );
    } else if (this.month == 2 && this.isLeapYear()) {
      return new MyDate(
        this.absoluteDayNum + MyDate.monthDays[1] + 1,
        3,
        this.year
      );
    } else {
      return new MyDate(
        this.absoluteDayNum + MyDate.monthDays[this.month - 1],
        this.month + 1,
        this.year
      );
    }
  }

  getYear(): number {
    return this.year;
  }

  startOnSunday(): boolean {
    return this.absoluteDayNum % 7 == 0;
  }

  toString(): string {
    return `${this.year}/${this.month}/1 - Day # ${this.absoluteDayNum}`;
  }
}

export class Euler {
  run(): void {
    let sundayCount = 0;
    let currDate = new MyDate(1, 1, 1900);

    while (currDate.getYear() < 2001) {
      if (currDate.startOnSunday()) {
        console.log(`SUNDAY: ${currDate}`);
        sundayCount++;
      }
      currDate = currDate.nextMonth();
    }

    console.log(`FINAL ${sundayCount}`);
  }
}
