
function Features() {
    return (
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
            <div
                className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
            >
                <div className="max-w-prose text-left">

                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                        Random
                        <strong className="text-indigo-600"> Forest </strong>
                        Regression
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                        Random Forest Regression is a supervised machine learning algorithm that uses an ensemble of decision trees to predict continuous target variables, leveraging the power of averaging predictions from multiple trees to improve accuracy and reduce variance.
                    </p>

                </div>

                <div  className="max-w-prose text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                        Key
                        <strong className="text-indigo-600"> Features </strong>
                    </h1>

                    <div className="flow-root">
                        <dl
                            className="m-4 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50"
                        >
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                    Smart Performance Prediction
                                </dt>

                                <dd className="text-gray-700 sm:col-span-2">
                                    Uses AI & Machine Learning to predict student marks based on study patterns.
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                    Personalized Study Strategies
                                </dt>

                                <dd className="text-gray-700 sm:col-span-2">
                                    Provides custom suggestions to improve learning efficiency.
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                    Receive Smart Insights
                                </dt>

                                <dd className="text-gray-700 sm:col-span-2">
                                    Students enter details like study hours, sleep patterns, revision frequency, and stress levels.
                                </dd>
                            </div>

                        </dl>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Features;