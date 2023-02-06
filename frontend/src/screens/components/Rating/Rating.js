import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const Rating = ({ value, text }) => {
	return (
		<div className="  flex items-center  space-x-2">
			<div className="flex  items-center space-x-0.5">
				<span>
					{value >= 1 ? (
						<BsStarFill size={14} />
					) : value >= 0.5 ? (
						<BsStarHalf size={12} />
					) : (
						<BsStar size={12} />
					)}
				</span>
				<span className="text-xl">
					{value >= 2 ? (
						<BsStarFill size={14} />
					) : value >= 1.5 ? (
						<BsStarHalf size={14} />
					) : (
						<BsStar size={14} />
					)}
				</span>
				<span className="text-xl">
					{value >= 3 ? (
						<BsStarFill size={14} />
					) : value >= 2.5 ? (
						<BsStarHalf size={14} />
					) : (
						<BsStar size={14} />
					)}
				</span>
				<span className="text-xl">
					{value >= 4 ? (
						<BsStarFill size={14} />
					) : value >= 3.5 ? (
						<BsStarHalf size={14} />
					) : (
						<BsStar size={14} />
					)}
				</span>
				<span className="text-xl">
					{value >= 5 ? (
						<BsStarFill size={14} />
					) : value >= 4.5 ? (
						<BsStarHalf size={14} />
					) : (
						<BsStar size={14} />
					)}
				</span>
			</div>
			<span>{text}</span>
		</div>
	);
};

export default Rating;
