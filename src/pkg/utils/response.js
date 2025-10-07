export const successResponse = (res, message, data) => {
    return res.status(200).json({
        success: true,
        message,
        data
    })
}

export const createResponse = (res, message, data) => {
    return res.status(201).json({
        success: true,
        message,
        data
    })
}