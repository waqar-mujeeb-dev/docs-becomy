import React from 'react';

const Table = ({ headers, rows }) => (
	<div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden mt-5">
		<table className="w-full text-sm leading-5">
			<thead className="bg-gray-100">
				<tr>
					{headers.map((header) => (
						<th key={header} className="py-3 px-4 text-left font-medium text-gray-600">{header}</th>
						))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex} className={`py-3 px-4 text-left ${cellIndex === 1 ? 'w-5/6' : ''}`}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default Table;
