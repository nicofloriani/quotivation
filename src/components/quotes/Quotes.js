import React from "react";
import CategoryForm from "./CategoryForm";
import QuoteCard from "./QuoteCard";

const Quotes = ({ filteredQuotes, categories, category, handleCategoryChange, addToFavorites, favoriteQuotes }) => {


    return (
        <section className='all-quotes'>
            <div className='quotes wrapper'>
                <div className="category-header">
                    <h2 className="category-header">Pick your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
                </div>
                {filteredQuotes.map(quote => (
                    <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />
                ))}
            </div>
        </section>
    );
};

export default Quotes;