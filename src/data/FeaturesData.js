import React from 'react';

import WAREHOUSE from "../images/WAREHOUSE.png"
import DISTRIBUTION from "../images/DISTRIBUTION.png"
import OPERATION from "../images/OPERATION.png"
import PICKING from "../images/PICKING.png"
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Flexible Warehouse Services',
		description: 'With the increasing demand of flexibility in warehouse services, Pallet Per Day is your flexible warehousing companion catering to the sudden shift in the volume and magnitude of inventories at different points of the year.',
		icon: <img src={WAREHOUSE} alt="WAREHOUSE" />,
		imgClass: 'one',
	},
	{
		name: 'Secondary Distribution',
		description: 'Pallet Per Day, the one-stop solution for all the warehousing & space for godown needs. Offering the transportation delivery mechanisms to facilitate the distribution network demands of the growing industries and business.',
		icon: <img src={DISTRIBUTION} alt="DISTRIBUTION" />,
		imgClass: 'two',
	},
	{
		name: 'Warehouse Operations',
		description: 'The Warehouse operations are augmented by highly-skilled professional staff managing and securing the goods in the safe warehouses. With 24*7  surveillance, we ensure that our warehouses provide the best secure storage  for your goods and commodities.',
		icon: <img src={OPERATION} alt="OPERATION" />,
		imgClass: 'three',
	},
	{
		name: 'Picking & Packing',
		description: 'Apart from warehousing management, we offer pick and packing services at the doorstep. All your commodities are packed in sealed storage loading kits with internationally standardised safety packings.',
		icon: <img src={PICKING} alt="PICKING" />,
		imgClass: 'four',
	},
	// {
	// 	name: 'Price',
	// 	description: 'We offer the highest value/cost ratio',
	// 	icon: iconStyle(BiDollar),
	// 	imgClass: 'five',
	// },
	// {
	// 	name: 'Scalable',
	// 	description:
	// 		'Our servers are located all over the world, therefore improving scalability and speed ',
	// 	icon: iconStyle(AiOutlineCloudUpload),
	// 	imgClass: 'six',
	// },
];
