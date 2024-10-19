const MembershipCard = ({ planName, price, reviews, features, isAnnual }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-20 dark:bg-gray-800 dark:border-gray-700">
      <div  >  
        <h5 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">{planName}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          {isAnnual ? (
            <>
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold">{price}</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/year</span>
            </>
          ) : (
            <span className="text-xl font-normal text-gray-500 dark:text-gray-400">Free</span>
          )}
        </div>
        {reviews && (
          <p className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">{reviews} reviews</p>
        )}
        <ul role="list" className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center ${
                !feature.included ? 'line-through decoration-gray-500' : ''
              }`}
            >
              <svg
                className={`w-5 h-5 ${
                  feature.included
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="ml-3 text-base font-normal text-gray-600 dark:text-gray-400">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="w-full px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Choose plan
      </button>
    </div>
  );
};

const Membership = () => {
  const memberships = [
    {
      planName: 'Gadget Craze Free',
      price: 0,
      reviews: null,
      isAnnual: false,
      features: [
        { text: 'Free standard shipping', included: true },
        { text: 'Free 2-day shipping', included: false },
        { text: 'Exclusive member prices on thousands of items', included: false },
        { text: 'Exclusive access to sales, events, and products', included: false },
        { text: 'Extended 60-day return window on most products', included: false },
        { text: 'Protection plans, including AppleCare+', included: false },
        { text: '24/7 tech support', included: false },
        { text: 'VIP member support', included: false },
        { text: '20% off repairs', included: false },
      ],
    },
    {
      planName: 'Gadget Craze Plus',
      price: 49.99,
      reviews: '4.2 out of 5 stars with 16,564',
      isAnnual: true,
      features: [
        { text: 'Free standard shipping', included: true },
        { text: 'Free 2-day shipping', included: true },
        { text: 'Exclusive member prices on thousands of items', included: true },
        { text: 'Exclusive access to sales, events, and products', included: true },
        { text: 'Extended 60-day return window on most products', included: true },
        { text: 'Protection plans, including AppleCare+', included: false },
        { text: '24/7 tech support', included: false },
        { text: 'VIP member support', included: false },
        { text: '20% off repairs', included: false },
      ],
    },
    {
      planName: 'Gadget Craze Total',
      price: 179.99,
      reviews: '4.4 out of 5 stars with 22,059',
      isAnnual: true,
      features: [
        { text: 'Free standard shipping', included: true },
        { text: 'Free 2-day shipping', included: true },
        { text: 'Exclusive member prices on thousands of items', included: true },
        { text: 'Exclusive access to sales, events, and products', included: true },
        { text: 'Extended 60-day return window on most products', included: true },
        { text: 'Protection plans, including AppleCare+', included: true },
        { text: '24/7 tech support', included: true },
        { text: 'VIP member support', included: true },
        { text: '20% off repairs', included: true },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 px-4 bg-gradient-to-r from-blue-100 via-white to-blue-100">
      {memberships.map((membership, index) => (
        <MembershipCard key={index} {...membership} />
      ))}
    </div>
  );
};

export default Membership;
