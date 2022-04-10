import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import './Userplane.css';
import { Box , Card, CardContent , Typography , Grid} from "@material-ui/core";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import YouTube from 'react-youtube';

class CourseList extends Component {


    render() { 
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

        return (
            <div>
                 <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Depth
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>




                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/cubic.png"  
                        alt='cubic' 
                        className="dali"
                        />
                </div>



                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Tessellation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>

                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                <ReactCompareSlider  style={{ "width":"50%", "margin": "auto" }}
                itemOne={<ReactCompareSliderImage  src="/assets/images/cad-tessellation-example-surface.webp"  alt="Image one" />}
                itemTwo={<ReactCompareSliderImage  src="/assets/images/cad-tessellation-example-wireframe.webp" alt="Image two" />}
                />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        3D Visualization
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>
             

                <div style={{
                    backgroundColor: 'black'
                  
                }}>
                    <img
                        src="/assets/images/Product_Salt Flat.jpeg"  
                        alt='testA' 
                        className="Center"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Photorealistic
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>
                <div >
                    <img
                        src="/assets/images/depth.jpg"  
                        alt='cubic' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Synthetic data
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/synthesis.jpeg"  
                        alt='synthesis' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Digital Twins
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/Vehicle_design_using_AR.jpeg"  
                        alt='using_AR' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Digital Twins - Simulation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/engineroom_checklist.jpg"  
                        alt='cubic' 
                        className="cubic"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Graph of Digital Twins
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        디지털트윈을 구성하는 각 요소들은 그래프 자료구조로 표현될 수 있습니다 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Picture courtesy : Microsoft Azure,
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/azure-digital-twins-explorer-demo.png"  
                        alt='cubic' 
                        className="Center"
                        />
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Machine Learning platform 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Digital twins 는 cloud 그리고 Machine Learning platform 과 함께할 때 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        비로소 그 가치가 더욱 빛납니다
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        아래 사진은 kubernetes 에서 작동하는 머신러닝 플랫폼에서의 파이프라인 구축과 예측결과성능 그래프를 보여주고 있습니다
                        Picture courtesy : kubeflow.org
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/pipelines-xgboost-graph.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                    <img
                        src="/assets/images/roc.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Brisbane’s new ferry terminals - a visual explanation of exactly how the ferry is resilient to rising water
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        디지털트윈 데이터로부터의 예측과 이들의 비쥬얼라이제이션을 통해 우리는 직관적으로 위기에 대처하는 구조물을 설계할 수 있습니다
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Picture courtesy : Brisbane’s new ferry terminals,
                        </Typography>
                    </CardContent>
                </Card>
                <YouTube className="Center" videoId="UVqDpfruFjc" opts={opts} onReady={this._onReady} />;
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Marvelous Designer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        사진과같은 의상을 3d로 제작하여 사용함으로써 보다 실감나는 동영상을 제작할 수 있습니다  
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Picture courtesy : Marvelous Designer,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                <YouTube className="cubic" videoId="qIcTM8WXFjk" opts={opts} onReady={this._onReady} />;
                </div>
                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        High Performance Computing 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                        Native 환경에서의 시뮬레이션은 다른 환경으로의 이식이나 시뮬레이션 경험의 공유등의 어려움이 존재합니다.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        그림에서는 wasm 기술을 사용하여 Native 작동에 가까운 Performance 를 보여주고 있습니다 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                        Picture courtesy : Siemens AG, Germany,
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/wasm.png"  
                        alt='cubic' 
                        className="cubic"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                        <Typography gutterBottom variant="h5" component="div">
                        Connect
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        현실에 존재하지 않는 환경에 대한 정보와 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        시각적 렌더링 ,
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        물리적 환경과 가상환경 그리고 사용자와의 상호작용에
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        라이프로깅을 더함으로써 시뮬레이션 생산성을 극대화합니다
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    backgroundColor: 'black'
                    
                }}>
                    <img
                        src="/assets/images/connect.jpg"  
                        alt='connect' 
                        className="connect"
                        />
                </div>

                <Card style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>   
                        <Typography gutterBottom variant="h5" component="div">
                        Future plan - Industrial Intelligence
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        인스턴스 세그먼테이션을 통한 영역분리, 3차원 깊이정보 및 광학 흐름 등의 풍부한 주석이 있는 쎄미 리얼리스틱한 합성물로부터 디지털트윈 구현을 위한 풍부한 오브젝트를 지원합니다
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                        Images courtesy : Google Research,
                        </Typography>
                    </CardContent>
                </Card>
                <div >
                    <img
                        src="/assets/images/kubric.gif"
                        alt='kubric' 
                        className="Center"
                        />
                </div>
   
               
                <AppBar position="static">
                    <Toolbar>

                    <Grid container justify="space-between">  
                            <Typography >
                            55 Seocho-daero 77-gil, Seocho-gu, Seoul
                            </Typography>
                            <Typography variant="title" align="right">
                            userplane Inc.
                        </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
       
    </div>




  
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

}

export default CourseList;