import { getMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'

export default function mealsDetails({ params }) {
  const meal = getMeal(params.mealSlug)
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: '...' }}
        ></p>
      </main>
    </>
  )
}
