export default class DateUtil {
  private static instance: DateUtil

  private constructor () {}

  public static getInstance (): DateUtil {
    if (DateUtil.instance == null) {
      DateUtil.instance = new DateUtil()
    }
    return DateUtil.instance
  }

  public getDaysFromDate (date: Date): number {
    const now = new Date()
    return Math.round((now.getTime() - date.getTime()) / 1000 / 60 / 60 / 24)
  }
}
