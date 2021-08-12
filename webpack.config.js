console.log(__dirname);

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
                                "../../magento2/app/code/Magento2/react-app/view/frontend/web/css/react.less"
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
                                "../../magento2/app/code/Magento2/react-app/view/frontend/web/css/react.css"
                            ),
                        },
                    ],
                },
            },
            runTasksInSeries: false,
        }),
    ],
};
