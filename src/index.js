import React , {Component} from 'react';
import PropTypes from 'prop-types'

class LinearBubbleChart extends Component{
    constructor(props){
        super(props);
        this.state={
            max_bubble_size: this.props.maxBubbleSize ? this.props.maxBubbleSize:35,
            height: this.props.height?this.props.height:300,
            min_bubble_size: this.props.minBubbleSize ? this.props.minBubbleSize:12,
            bubbleSpacing: this.props.bubbleSpacing ? this.props.bubbleSpacing:90
        }
    }

    componentWillMount(){
        
    }

    componentDidMount(){

    }

    getDataMaxValue(){
        let max_value = 0;
        let min_value = Infinity;
        let value_interval = 0;
        if(this.props.data){
            this.props.data.map(data_item=>{
                if(data_item.value > max_value){
                    max_value = data_item.value
                }
                if(data_item.value < min_value){
                    min_value = data_item.value
                }
            })
            value_interval = (max_value - min_value)/(this.state.max_bubble_size-this.state.min_bubble_size)
        }
        return value_interval
    }

    render(){
        let value_interval = this.getDataMaxValue();
        return(
            <div>
                <svg height = {this.state.height} width={100+(this.props.data.length * (this.state.bubbleSpacing))}>
                    <path stroke = "white" d={"M 10 "+this.state.height/2+"L "+((this.props.data.length * this.state.bubbleSpacing)+20) +" "+this.state.height/2}></path>
                    {
                        this.props.data.map((data_item , index)=>{
                            let circle_radius = Math.round((data_item.value/value_interval)+this.state.min_bubble_size)
                            return(
                            <g key={index}>                                
                                <circle onClick={this.props.onBubbleClick?()=>{this.props.onBubbleClick(index , data_item.value , data_item.title)}:null} cx={50+(index*this.state.bubbleSpacing)} cy={this.state.height/2} r={circle_radius} fill={data_item.color ? data_item.color : this.props.bubbleColor? this.props.bubbleColor: "#FB6669"}></circle>
                                <text fill={this.props.valueColor? this.props.valueColor:"black"} x={(45-(data_item.value.toString().length * 2))+(index*this.state.bubbleSpacing)} y= {this.state.height/2 - circle_radius - 20}>{data_item.value}</text>
                                <text fill={this.props.titleColor?this.props.titleColor:"black"} x={(45-(data_item.title.length * 2))+(index*this.state.bubbleSpacing)} y= {this.state.height/2 + circle_radius + 20}>{data_item.title}</text>
                            </g>
                            )
                        })
                    }
                </svg>
            </div>
        )
    }

}

LinearBubbleChart.propTypes = {
    data: PropTypes.array.isRequired,
    bubbleSpacing: PropTypes.number,
    height: PropTypes.number,
    maxBubbleSize: PropTypes.number,
    minBubbleSize:PropTypes.number,
    bubbleColor: PropTypes.string,
    titleColor: PropTypes.string,
    valueColor: PropTypes.string,
    titlePosition: PropTypes.string,
    valuePosition: PropTypes.string,
    onBubbleClick: PropTypes.func
}

export default LinearBubbleChart;