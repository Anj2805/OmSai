class apiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    // Search Method
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i" // Case-insensitive search
            }
        } : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    // Filter Method
    filter() {
        const queryCopy = { ...this.queryStr };

        // Fields to remove from filtering
        const removableFields = ["keyword", "page", "limit"];
        removableFields.forEach(key => delete queryCopy[key]);

        // Advanced filtering for price, ratings, etc.
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr)); // Apply filters like price and ratings
        return this;
    }

    // Pagination method (Optional, can be added later)
    pagination(resultsPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);
        this.query = this.query.limit(resultsPerPage).skip(skip);
        return this;
    }
}

module.exports = apiFeatures;
