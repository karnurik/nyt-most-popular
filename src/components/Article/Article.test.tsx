import React from "react";
import { render } from "@testing-library/react";
import Article from "./Article";
import { dummyArticle } from "../../dummyData";

describe('renders article', () => {

    it('should have abstract', () => {
        const { getByText } = render(<Article article={dummyArticle} />);
        const contentElement = getByText(dummyArticle.abstract);

        expect(contentElement).toBeInTheDocument();
    });
});

