export const response = (code, message, records) => {
    return {
        response: {
            status: {
                code: code,
                message: message,
            },
            records: records,
        },
    };
};
