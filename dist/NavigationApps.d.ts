export class NavigationApps {
    constructor(props: any);
    state: {
        navApps: any;
        modalVisible: boolean;
    };
    actionSheetRef: any;
    handleNavApp: (navApp: any) => Promise<any>;
    renderNavigationApps: () => any[];
    renderNavigationAppsAsModal: () => any;
    renderNavigationAppsAsActionSheet: () => any;
    renderNavigationAppsView: () => any;
    renderMainView: () => any;
    render(): any;
}
export namespace NavigationApps {
    namespace defaultProps {
        const iconSize: number;
        const viewMode: string;
        const row: boolean;
        const viewContainerStyle: {};
        const modalProps: {};
        const modalContainerStyle: {};
        const modalBtnOpenTitle: string;
        const modalBtnCloseTitle: string;
        const modalBtnCloseContainerStyle: {};
        const modalBtnCloseStyle: {};
        const modalBtnCloseTextStyle: {};
        const modalBtnOpenTextStyle: {};
        const modalBtnOpenStyle: {};
        const actionSheetBtnOpenTitle: string;
        const actionSheetBtnCloseTitle: string;
        const actionSheetTitle: string;
        const actionSheetBtnOpenStyle: {};
        const actionSheetBtnOpenTextStyle: {};
        const address: string;
        const disable: boolean;
    }
    namespace propTypes {
        const disable_1: any;
        export { disable_1 as disable };
        const iconSize_1: any;
        export { iconSize_1 as iconSize };
        const viewMode_1: any;
        export { viewMode_1 as viewMode };
        const row_1: any;
        export { row_1 as row };
        const address_1: any;
        export { address_1 as address };
        export const containerStyle: any;
        const modalBtnOpenTitle_1: any;
        export { modalBtnOpenTitle_1 as modalBtnOpenTitle };
        const modalBtnCloseTitle_1: any;
        export { modalBtnCloseTitle_1 as modalBtnCloseTitle };
        const modalBtnCloseContainerStyle_1: any;
        export { modalBtnCloseContainerStyle_1 as modalBtnCloseContainerStyle };
        const modalBtnCloseStyle_1: any;
        export { modalBtnCloseStyle_1 as modalBtnCloseStyle };
        const modalBtnCloseTextStyle_1: any;
        export { modalBtnCloseTextStyle_1 as modalBtnCloseTextStyle };
        const modalBtnOpenTextStyle_1: any;
        export { modalBtnOpenTextStyle_1 as modalBtnOpenTextStyle };
        const modalBtnOpenStyle_1: any;
        export { modalBtnOpenStyle_1 as modalBtnOpenStyle };
        const modalProps_1: any;
        export { modalProps_1 as modalProps };
        const modalContainerStyle_1: any;
        export { modalContainerStyle_1 as modalContainerStyle };
        const actionSheetBtnOpenTitle_1: any;
        export { actionSheetBtnOpenTitle_1 as actionSheetBtnOpenTitle };
        const actionSheetBtnCloseTitle_1: any;
        export { actionSheetBtnCloseTitle_1 as actionSheetBtnCloseTitle };
        const actionSheetTitle_1: any;
        export { actionSheetTitle_1 as actionSheetTitle };
        const actionSheetBtnOpenStyle_1: any;
        export { actionSheetBtnOpenStyle_1 as actionSheetBtnOpenStyle };
        const actionSheetBtnOpenTextStyle_1: any;
        export { actionSheetBtnOpenTextStyle_1 as actionSheetBtnOpenTextStyle };
        export const waze: any;
        export const googleMaps: any;
        export const maps: any;
    }
}
