import React from 'react';
import { useSelector } from 'react-redux';

const MaterialFence = () => {

	const selectedFence = useSelector((state) => state.selection);

	const fenceData = [
		{
			name: "4'x8' Cedar Dog Ear",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "6'x8' Cedar Dog Ear",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "5'4'x8' Cedar Lattice Top",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "6'x8' Treated Dog Ear",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "6'x8' Treated Shadow Box",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "6'x8' Natural Stockade",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  },
		{
			name: "Cedar French Gothic",
			imageSrc: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
			treatment: "None-Cedar",
			nominalHeight: "72\"",
			nominalWidth: "96\"",
			picketMaterial: "Cedar",
			recommendedPost: "Cedar 4x4",
			recommendedPostSize: "10'",
			recommendedUse: "Back Yard",
			panelType: "Privacy",
			picketTopStyle: "Dog Ear",
			postSpacing: "96\"",
		  }
	  ];


	  if (!selectedFence) {
		return (
		  <>
		  <div className="col-sm-8 app-right-panel woofenceheading">
			<h1 style={{ marginLeft: "1rem", fontSize: "30px", marginTop: "1rem" }}>WOOD FENCE SELECTION GUIDE</h1>
			<div className="design-info-overlay-defaults"></div>
			<div className="desc-img-container">
			  <div id="help-desc-content">
				<div className="m-3">
				  <table className="table table-bordered table-sm text-center w-auto medium-font-size" style={{ border: "1px solid black", width: "90%", height: "" }}>
					<thead style={{ border: "1px solid black" }}>
					  <tr>
						<th style={{ backgroundColor: "green", fontSize: "12px", padding: ".3rem .6rem", fontWeight: "bold" }}></th>
						{fenceData.map((fence, index) => (
						  <th key={index} style={{ border: "1px solid black", backgroundColor: "green", color: "#fff", fontSize: "13px", padding: ".2rem 1rem" }}>{fence.name}</th>
						))}
					  </tr>
					</thead>
					<tbody style={{ border: "1px solid black" }}>
					  {['treatment', 'nominalHeight', 'nominalWidth', 'picketMaterial', 'recommendedPost', 'recommendedPostSize', 'recommendedUse', 'panelType', 'picketTopStyle', 'postSpacing'].map((category, categoryIndex) => (
						<tr key={categoryIndex}>
						  <td style={{ border: "1px solid black", backgroundColor: "green", color: "#fff", fontSize: "12px", padding: ".3rem .6rem", fontWeight: "bold" }}>{category}</td>
						  {fenceData.map((fence, fenceIndex) => (
							<td
							  key={fenceIndex}
							  style={{
								border: "1px solid black",
								fontSize: "12px",
								padding: "0rem .1rem"
							  }}
							>
							  {fence[category]}
							</td>
						  ))}
						</tr>
					  ))}
					</tbody>
				  </table>
				</div>
			  </div>
			</div>
		  </div>
		  </>
		);
	  }



  

  return (
	<>
	<div className="col-sm-8 app-right-panel woofenceheading">
	<h1 style={{ marginLeft: "1rem", fontSize: "30px", marginTop: "1rem" }}>WOOD FENCE SELECTION GUIDE</h1>
	<div className="design-info-overlay-defaults"></div>
	<div className="desc-img-container">
	  <div id="help-desc-content">
		<div className="m-3">
		  <table className="table table-bordered table-sm text-center w-auto medium-font-size" style={{ border: "1px solid black", width: "90%", height: "" }}>
			<thead style={{ border: "1px solid black" }}>
			  <tr>
				<th style={{ backgroundColor: "green", fontSize: "12px", padding: ".3rem .6rem", fontWeight: "bold" }}></th>
				{fenceData.map((fence, index) => (
				  <th key={index} style={{ border: "1px solid black", backgroundColor: "green", color: "#fff", fontSize: "13px", padding: ".2rem 1rem" }}>{fence.name}</th>
				))}
			  </tr>
			</thead>
			<tbody style={{ border: "1px solid black" }}>
			  {['treatment', 'nominalHeight', 'nominalWidth', 'picketMaterial', 'recommendedPost', 'recommendedPostSize', 'recommendedUse', 'panelType', 'picketTopStyle', 'postSpacing'].map((category, categoryIndex) => (
				<tr key={categoryIndex}>
				  <td style={{ border: "1px solid black", backgroundColor: "green", color: "#fff", fontSize: "12px", padding: ".3rem .6rem", fontWeight: "bold" }}>{category}</td>
				  {fenceData.map((fence, fenceIndex) => (
					<td
					  key={fenceIndex}
					  style={{
						border: "1px solid black",
						fontSize: "12px",
						padding: "0rem .1rem",
						backgroundColor: selectedFence.heading === fence.name ? "yellow" : "white",
					  }}
					>
					  {fence[category]}
					</td>
				  ))}
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
 
	</div>
  </div>

	</>
  );
};

export default MaterialFence;
