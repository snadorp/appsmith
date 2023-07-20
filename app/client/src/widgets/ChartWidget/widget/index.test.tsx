import {render } from '@testing-library/react'
import type { ChartType } from '../constants';
import ChartWidget from '.'
import React from "react";

import type { RenderMode } from 'constants/WidgetConstants';

import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from "redux-mock-store";

let container: any;
function todos(state = [], action : any) {
    return state
  }

describe("getPageView", () => {
    let props = {
        chartType: "LINE_CHART" as ChartType,
        chartData: {"chart1" : { data: [{ x : 1, y : 1}]}},
        customFusionChartConfig: { type: "random" },
        xAxisName: "xaxisname",
        yAxisName: "yaxisname",
        chartName: "chartname",
        allowScroll: false,
        borderRadius: "1",
        widgetId: "widgetID",
        parentColumnSpace: 1,
        parentRowSpace: 1,
        topRow: 0,
        bottomRow: 0,
        leftColumn: 0,
        rightColumn: 0,
        widgetName: "widgetName",
        renderMode: "CANVAS" as RenderMode,
        isLoading: false,
        version: 1,
        hasOnDataPointClick: false,
        dimensions: {
            componentWidth: 0,
            componentHeight: 0
        },
        setAdaptiveYMin: false,
        type: "CHART_WIDGET"

    }

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
      });
    
      afterEach(() => {
        document.body.removeChild(container);
        container = null;
      });

    it("renders chart component if no widget errors are present", async () => {
        
        // const store = createStore(todos, { "key": "value"})
        const store = configureStore()
        let component = <Provider store={store({})}>
            <ChartWidget {...props}></ChartWidget>
        </Provider>
        const { container, debug, getByText, rerender } = render(component)
        debug()
    })
})