import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css/contribution-graph.module.css"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const getLevel = count => {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

const ContributionGraph = () => {
  const { contrib } = useStaticQuery(graphql`
    query {
      contrib: githubContributions {
        totalContributions
        weeksJson
      }
    }
  `)

  if (!contrib || !contrib.weeksJson) return null

  const weeks = JSON.parse(contrib.weeksJson)

  // Build month label positions
  const monthLabels = []
  weeks.forEach((week, i) => {
    if (!week.contributionDays.length) return
    const month = new Date(week.contributionDays[0].date).getMonth()
    const prevMonth =
      i > 0 && weeks[i - 1].contributionDays.length
        ? new Date(weeks[i - 1].contributionDays[0].date).getMonth()
        : -1
    if (month !== prevMonth) {
      monthLabels.push({ col: i, label: MONTHS[month] })
    }
  })

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>// activity</span>
        <span className={styles.total}>
          {contrib.totalContributions} contributions in the last year
        </span>
      </div>

      <div className={styles.wrapper}>
        {/* Month labels row */}
        <div
          className={styles.months}
          style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}
        >
          {monthLabels.map(({ col, label }) => (
            <span
              key={label + col}
              className={styles.monthLabel}
              style={{ gridColumnStart: col + 1 }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Day labels + grid */}
        <div className={styles.body}>
          <div className={styles.dayLabels}>
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div
            className={styles.grid}
            style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}
          >
            {weeks.map((week, wi) =>
              week.contributionDays.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  className={`${styles.cell} ${
                    styles[`l${getLevel(day.contributionCount)}`]
                  }`}
                  style={{ gridRowStart: di + 1, gridColumnStart: wi + 1 }}
                />
              ))
            )}
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <span className={styles.legendLabel}>Less</span>
          {[0, 1, 2, 3, 4].map(l => (
            <div key={l} className={`${styles.cell} ${styles[`l${l}`]}`} />
          ))}
          <span className={styles.legendLabel}>More</span>
        </div>
      </div>
    </section>
  )
}

export default ContributionGraph
