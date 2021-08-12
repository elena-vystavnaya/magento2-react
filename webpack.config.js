module.exports = {
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        {
                            source: path.join(
                                __dirname,
                                "../build/static/*.css"
                            ),
                            destination: path.join(
                                __dirname,
                                "../../magento/app/code/My/React/view/frontend/web/css/react.css"
                            ),
                        },
                    ],
                },
            },
            runTasksInSeries: false,
        }),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        {
                            source: path.join(
                                __dirname,
                                "../build/static/*.js"
                            ),
                            destination: path.join(
                                __dirname,
                                "../../magento/app/code/My/React/view/frontend/web/js/react.js"
                            ),
                        },
                    ],
                },
            },
            runTasksInSeries: false,
        }),
    ],
};
