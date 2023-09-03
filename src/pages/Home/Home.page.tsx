import { FC, useState } from 'react';
const messages = [
	'learn react 🔥',
	'apply for jobs 🐥',
	'invest your income 👋',
];
const HomePage: FC = () => {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handleClickPrevious = () => {
		if (step > 1) {
			setStep((prevState) => prevState - 1);
		}
	};
	const handleClickNext = () => {
		if (step < 3) {
			setStep((prevState) => prevState + 1);
		}
	};
	return (
		<>
			<button className={'close'} onClick={() => setIsOpen(!isOpen)}>
				&times;
			</button>
			{isOpen && (
				<div className={'steps'}>
					<div className="numbers">
						<div className={step >= 1 ? 'active' : ''}>1</div>
						<div className={step >= 2 ? 'active' : ''}>2</div>
						<div className={step >= 3 ? 'active' : ''}>3</div>
					</div>
					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>
					<div className="buttons">
						<button
							onClick={handleClickPrevious}
							className={'bg-purple-600 text-white'}>
							previous
						</button>
						<button
							onClick={handleClickNext}
							className={'bg-purple-600 text-white'}>
							next
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
