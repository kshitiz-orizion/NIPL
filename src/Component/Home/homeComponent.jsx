import React,{Component} from 'react';
import history from '../../Inits/history';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { toast } from 'react-toastify';
import Chart from "react-google-charts";
class HomeComponent extends Component{
	componentWillMount(){
    	this.setState({
			std:'',
			dob:moment(new Date()),
			studentAbsent:[]
		});
	}
	render(){
		const data = [
		  ["Year", "Sales"],
		  ["JAN", 1000],
		  ["FEB", 1170],
		  ["MAR", 660],
		  ["APR", 1030],
		  ["MAY", 1030],
		  ["JUN", 1030],
		  ["JUN", 1000],
		  ["JULY", 1170],
		  ["AUG", 660],
		  ["SEPT", 1030],
		  ["OCT", 1030],
		  ["NOV", 1030],
		  ["DEC", 1030],

		];
		const options = {
		  curveType: "function",
		  legend:"none"
		};
		const options2={
		          legend: 'none',
		          hAxis: { minValue: 0, maxValue: 9 },
		          curveType: 'function',
		          pointSize: 5,
		}
		return (
			<div style={{marginTop:'150px'}}>
					<div className="headingDashboardContainer">
						<h3 className="headingDashboard">Dashboard</h3>
					</div>
			 		<div className="dashboardContainer">
			 			<div className="innerdashboarddiv dashboard1 innerdashboarddivflex">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Open Issues</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Open</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Overdue</div>
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Service Reminders</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Overdue</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Due Soon</div>
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard2">
			 				<h1 style={{fontSize:'15px'}} className="marginLeft HeadingComments">Recent Comments</h1>
			 				{/*<div className="comments">
			 					No Comments to show
			 				</div>*/}
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Vehicle Assignment</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">1</div>
			 						<div className="innerContainerHeading">Assigned</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">1</div>
			 						<div className="innerContainerHeading">Unassigned</div>
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Vehicles</h1>
			 						<div className="vehicleDiv">
			 							<div className="marginLeft">Active</div>
			 							<div className="VehicleValue" style={{backgroundColor:'green'}}>
			 								2
			 							</div>
			 						</div>
			 						<div className="vehicleDiv">
			 							<div className="marginLeft">Inactive</div>
			 							<div className="VehicleValue" style={{backgroundColor:'blue'}}>
			 								0
			 							</div>
			 						</div>
			 						<div className="vehicleDiv">
			 							<div className="marginLeft">In Shop</div>
			 							<div className="VehicleValue" style={{backgroundColor:'orange'}}>
			 								0
			 							</div>
			 						</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Vehicle Location</h1>
			 					<div style={{fontSize:'13px',paddingLeft:'30px'}}>
			 						No Vehicle currently within any place geofences
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Service Costs</h1>
			 					<Chart
							          chartType="LineChart"
							          width="100%"
							          height="200px"
							          data={data}
							          options={options}
							        />
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Critical Faults</h1>
			 					<div style={{fontSize:'13px',paddingLeft:'100px'}}>
			 						No Critical Faults
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Vehicle Renewel Reminders</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Overdue</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Due Soon</div>
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Active Work Orders</h1>
			 						<div className="vehicleDiv">
			 							<div className="marginLeft">Open</div>
			 							<div className="VehicleValue" style={{backgroundColor:'blue'}}>
			 								2
			 							</div>
			 						</div>
			 						<div className="vehicleDiv">
			 							<div className="marginLeft">Pending</div>
			 							<div className="VehicleValue" style={{backgroundColor:'orange'}}>
			 								2
			 							</div>
			 						</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Total Cost</h1>
			 					<div style={{fontSize:'13px',width:'100%',textAlign:'center'}}>
			 						N/A
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Fuel Cost</h1>
							        <Chart
							          chartType="LineChart"
							          width="100%"
							          height="200px"
							          data={data}
							          options={options}
							        />
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Cost Per Meter</h1>
			 					<div style={{fontSize:'13px',width:'100%',textAlign:'center'}}>
			 						N/A
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Contact Renewel Reminders</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Overdue</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Due Soon</div>
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">All Faults</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Open</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Pending</div>
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1">
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Inspections</h1>
			 					<div className="openissues">
			 						<div className="innerContainer">0</div>
			 						<div className="innerContainerHeading">Overdue</div>
			 					</div>
			 					<div className="openissues">
			 						<div className="innerContainer">0%</div>
			 						<div className="innerContainerHeading">Item Failure Rate</div>
			 					</div>
			 				</div>
			 				<div className="subdashboarddiv">
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Inspection Submisson</h1>
			 					<Chart
									  width={'100%'}
									  height={'240px'}
									  chartType="LineChart"
									  loader={<div>Loading Chart</div>}
									  data={[
  											["Year", "Sales"],
  											["JUN", 200],
  											["JULY", 200],
  											["AUG", 200],
  											["SEPT", 200],
  											["OCT", 200],
  											["NOV", 200],
  											["DEC", 200],

											]}
									  options={options2}
									/>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard2">
			 				<h1 style={{fontSize:'15px'}} className="marginLeft meterHeading">Latest Meter Readings</h1>
			 				<div className="footerMeterContainer">
			 					<div className="footerMeter" >
				 					<div className="footerDiv milesDiv" ></div>
				 					<div className="footerHead" >
				 						Miles
				 					</div>
				 					<div className="footerDiv kmsDiv"></div>
				 					<div className="footerHead" >
				 						KMS
				 					</div>
				 					<div className="footerDiv hoursDiv"></div>
				 					<div className="footerHead" >
				 						HOURS
				 					</div>
			 					</div>
			 				</div>
			 			</div>
			 			<div className="innerdashboarddiv dashboard1" style={{height:'300px'}}>
			 				<div className="subdashboarddiv" style={{height:'100%'}}>
			 					<h1 style={{fontSize:'15px'}} className="marginLeft">Inspections Summary</h1>
			 					<Chart
							          chartType="PieChart"
							          data={[["X", "Y"], ["a", 100], ["b", 10]]}
							          graph_id="PieChart"
							          width={"100%"}
							          height={"240px"}
							          options={options}
							        />
			 				</div>
			 			</div>
			 		</div>
			</div>
		)
	}
}

export default HomeComponent;