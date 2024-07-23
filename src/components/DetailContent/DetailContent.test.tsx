import React from 'react';
import { render } from "@testing-library/react";
import DetailContent from "./DetailContent";
import { dummyArticle } from "../../dummyData";

describe('renders article detail', () => {

    it('should have title', () => {
        const { getByText } = render(<DetailContent article={dummyArticle} />);
        const contentElement = getByText(dummyArticle.title);

        expect(contentElement).toBeInTheDocument();
    });
    it('should have abstract', () => {
        const { getByText } = render(<DetailContent article={dummyArticle} />);
        const contentElement = getByText(dummyArticle.abstract);

        expect(contentElement).toBeInTheDocument();
    });
});
