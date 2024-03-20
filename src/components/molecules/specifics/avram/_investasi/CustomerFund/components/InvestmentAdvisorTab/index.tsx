import React from 'react';

const InvestmentAdvisor = () => {
  const VERTICAL_LINES_DATA = [
    {
      isActive: false,
      title: 'Money Market'
    },
    {
      isActive: true,
      title: 'Bond'
    },
    {
      isActive: false,
      title: 'Balanced'
    },
    {
      isActive: false,
      title: 'Stock'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Percentage circle */}
      <div className="place-self-center w-full max-w-[400px] aspect-square p-4 border-solid border-purple_dark border-[20px] rounded-full flex items-center justify-center flex-col gap-4">
        <p className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-karla tracking-tighter">
          100 %
        </p>
        <p className="text-center text-sm sm:text-base">
          Avrist Asset Management funds outperformed their peer averages
        </p>
      </div>

      {/* Main content section */}
      <div className="flex flex-col gap-6">
        {/* Header section */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold font-karla">
            A track record of strong performance
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iure unde repellendus harum suscipit.
          </p>
        </div>
        <div>
          {VERTICAL_LINES_DATA.map((item, index) => (
            <p
              className={`p-2 font-karla text-xl border-l-8 border-solid ${item.isActive ? 'border-purple_dark' : 'border-purple_verylight'}`}
              key={index}
            >
              {item.title}
            </p>
          ))}
        </div>
        <p>
          Our funds are crafted with you in mind to help you reach your goals of
          investment success. Over the last 10 years we have had a history of
          strong performance.*
        </p>
      </div>
    </div>
  );
};

export default InvestmentAdvisor;
