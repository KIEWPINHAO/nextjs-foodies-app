import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';

import classes from './page.module.css';

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}

export default async function meals() {
    const meals = await getMeals();
    
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {''}
                    <span className={classes.highlight} >by you</span>
                </h1>
                <p>Choose you favorite recipe and cook it!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}
