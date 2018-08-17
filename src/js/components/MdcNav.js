import React, {Component} from 'react';
import classNames from "classnames";

import NavItems from "../data/nav-items";
import SpecialtiesItems from "../data/specialties-items";


export default class MdcNav extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

        this.state = {
            isScrolledTop: true,
            takeoverOpen: false,
            indexHovered: 0
        }
	}

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop

            // this.setState({
            //     isScrolledTop: scrollTop < 90
            // });
    }

    openTakeover = (event) => {
        this.setState({
            takeoverOpen: true
        });
    }

    setIndexHovered = (event) => {
        this.setState({
            indexHovered: this.getChildIndex(event.target)
        });
    }

    closeTakeover = (event) => {
        // setTimeout(() => {
            this.setState({
                takeoverOpen: false
            });
        // }, 0);
    }

    getChildIndex = (elem) => {
        let i = 0;

        while ((elem = elem.previousSibling) != null) {
          i++;
        }

        return i;
    }

	render() {
        const { isScrolledTop, takeoverOpen, indexHovered } = this.state;


        const classnames = classNames({
            "mdc-nav": true,
            "mdc-nav--takeover": takeoverOpen,
            "mdc-nav--scrolled": !isScrolledTop
        })

        const navItems = NavItems.data.map((item, i) =>
            <li key={i} onMouseOver={(e) => { this.openTakeover(e); this.setIndexHovered(e) }} onMouseOut={this.closeTakeover}>
                <a>{item.name}</a>
            </li>
        );

        const specialtiesItems = SpecialtiesItems.data.map((item, i) =>
            <li key={i} className={ (i == 0) ? "overview-item" : ""}>
                {item.name}
            </li>
        );

        const lineAnimation = {
            transform: 'translate3d(' + 140 * (indexHovered + 0) + 'px, 0, 0)',
            opacity: 1
        }

        return (
            <nav className={classnames}>
                <div className="mdc-nav__topbar">
                    <div className="mdc-nav__left">
                        <svg width="185" height="45" viewBox="0 0 300 73" className="mdc-nav__logo">
                            <g fill="none" fillRule="evenodd">
                                <g fill="#CA001B" fillRule="nonzero">
                                    <path d="M108.499 19.553c0-.49.333-.755.753-.755.712 0 1.79.755 2.392 2.259-.215 0-.542.067-.76.067-1.296 0-2.385-.617-2.385-1.571zm-78.398 0c0-.49.32-.755.76-.755.691 0 1.724.755 2.324 2.259-2.002 0-3.084-.433-3.084-1.504zm15.121-7.776c0-8.05 1.574-9.286 2.064-9.286.87 0 .972.539.972 3.625 0 3.172-1.356 7.323-3.036 9.602v-3.941zm55.045 7.934c-.936 1.296-1.69 3.133-1.69 5.502 0 4.537 2.597 8.865 7.643 8.865 4.882 0 8.297-3.842 8.297-9.19 0-1.557-.053-1.773-.156-2.415 1.13-.492 2.114-1.247 2.872-1.849.65-.485 1.133-.758 1.522-.758.484 0 .699.38.699 1.082V31.54c0 1.726.548 2.538 1.897 2.538 1.244 0 2.12-.868 2.604-1.892 1.795-3.726 4.389-8.694 5.524-10.582.272-.431.495-.762.653-.762.217 0 .33.165.33.86v8.437c0 2.37 1.083 3.939 3.464 3.939 2.498 0 3.736-2.384 5.92-6.051.105-.222.154-.378.154-.537 0-.486-.424-.76-.86-.76-.494 0-.767.489-2.388 2.264-.328.338-.648.806-1.248.806-.216 0-.381-.258-.381-.585v-9.458c0-2.54-1.14-3.562-2.606-3.562-1.188 0-2.168.484-3.199 2-1.843 2.705-3.738 6.541-4.77 8.474-.113.228-.272.55-.373.55-.115 0-.164-.165-.164-.55v-6.912c0-1.992-.54-3.562-2.66-3.562-2.225 0-3.362 1.512-4.989 2.645-1.026.763-1.95 1.299-2.648 1.621-1.092-2.754-3.097-4.146-4.775-4.103-1.69.058-2.879 1.087-2.879 2.815 0 1.775 1.086 3.01 2.548 3.56.807.323 1.569.382 2.66.382.325 0 .65 0 .858-.06.115.536.064 1.304.064 1.896 0 2.65-1.573 5.285-4.5 5.285-3.043 0-4.825-2.912-4.825-6.258 0-2.543.756-4.646 1.998-6.097.496-.545.87-.872.87-1.367 0-.254-.374-.32-.702-.32-2.064 0-4.335.923-5.904 1.727-2.073 1.081-4.506 2.872-6.516 4.652-.973-2.165-2.167-4.055-2.767-5.515-.21-.596-.372-1.289-.808-1.289-.386 0-.552.38-.818 1.124-.972 2.864-6.18 11.241-7.318 12.376-.106.156-.264.325-.318.325-.116 0-.179-.052-.179-.379v-9.458c0-2.54-1.028-3.562-2.425-3.562-1.2 0-2.228.484-3.2 2-1.791 2.705-3.968 6.645-4.995 8.585-.165.335-.326.439-.385.439-.053 0-.098-.215-.098-.55v-6.912c0-2.54-1.032-3.562-2.448-3.562-1.194 0-2.326.441-3.25 2-2.271 3.837-6.067 9.723-6.774 10.69-.11.167-.218.277-.325.33-.108 0-.17-.11-.17-.381v-9.077c0-2.54-1.028-3.562-2.433-3.562-1.952 0-3.032 1.79-3.745 2.92-.978 1.566-2.275 3.675-3.302 5.621-.712 1.3-1.306 2.483-1.525 2.483-.106 0-.106-.49-.106-1.409v-7.232c3.414-3.787 5.529-8.422 5.529-13.5 0-2.922-1.3-4.534-3.3-4.534-3.75 0-6.615 5.83-6.615 12.737v5.617c-1.738 1.081-3.366 1.61-5.377 2.002-1.03-3.02-3.2-4.585-4.926-4.542-1.68.058-2.878 1.087-2.878 2.815 0 2.859 2.823 4.047 5.312 4.047h.703c.107.547.107 1.14.107 1.731 0 2.65-1.572 5.285-4.492 5.285-3.033 0-4.83-2.912-4.83-6.258 0-2.543.755-4.646 2.002-6.097.491-.545.877-1.03.877-1.367 0-.254-.386-.32-.712-.32-2.061 0-6.61 2.767-12.037 8.165-.478-4.32-1.024-8.539-1.024-12.643 0-4.588.912-8.484 1.126-9.606.109-.698.175-1.135.175-1.453 0-.436-.227-.657-.814-.657C9.654 0 0 6.974 0 17.393c0 7.387 2.719 10.956 7.425 15.543-2.858 4.593-5.15 10.04-5.15 14.907 0 3.503.823 6.157 3.416 6.157 5.424 0 9.49-11.227 9.49-19.549 0-2.478-.103-4.966-.319-7.447 2-2.117 5.092-4.972 5.848-5.24-.324 1.136-.537 2.327-.537 3.45 0 4.536 2.605 8.864 7.643 8.864 4.721 0 8.295-3.842 8.295-9.19 0-.69-.053-1.297-.107-1.942 1.73-.319 3.318-.762 4.832-1.666v10.85c0 1.398.97 1.948 1.89 1.948 1.256 0 1.906-.868 2.821-2.856.764-1.628 2.82-5.35 4.064-7.572.982-1.73 1.526-2.857 1.962-2.857.102 0 .218.264.218.909v9.239c0 2.487 1.302 3.137 2.427 3.137 1.087 0 1.794-.595 2.5-1.57 2.823-3.998 5.81-8.74 6.992-10.806.224-.364.49-.645.71-.645.21 0 .32.116.32.808v9.675c0 1.726.542 2.538 1.905 2.538 1.24 0 2.049-.868 2.535-1.892 1.801-3.726 4.452-8.644 5.597-10.582.267-.431.54-.81.7-.81.224 0 .273.263.273.97v9.177c0 2.487 1.3 3.137 2.448 3.137 1.507 0 2.492-1.084 3.468-2.321 1.777-2.332 4.383-6.474 5.957-9.13a22.89 22.89 0 0 1 1.635 3.022c-1.306 1.57-2.61 3.345-2.61 5.236 0 2 1.412 3.193 2.875 3.193 2.49 0 4.77-2.384 4.77-5.673 0-1.29-.378-2.646-.863-3.936 2.21-2.166 4.873-4.271 6.837-4.758zm-89.32 11.772c.439 2.86.822 5.673.822 7.883 0 5.177-1.735 11.228-4.717 11.18-1.152 0-2.118-1.15-2.17-3.134-.108-6.474 2.98-11.985 6.066-15.93zm79.169-3.678c.328.928.496 1.68.496 2.431 0 .868-.33 1.737-.927 1.737-.427 0-.865-.49-.865-1.246 0-.813.703-2.11 1.296-2.922zM12.906 2.05c0 .33-.762 1.839-1.734 4.541-1.031 2.804-2.014 6.794-2.014 11.603 0 2.862.712 6.645 1.315 10.48l-1.74 2.33C5.967 27.648 4.23 23.873 4.23 17.392c0-9.179 5.588-15.545 8.455-15.545.171 0 .22.048.22.203zM268.339 19.553c0-.49.317-.755.76-.755.699 0 1.795.755 2.391 2.259-.212 0-.538.067-.767.067-1.296 0-2.384-.617-2.384-1.571zm-78.822 0c0-.49.335-.755.763-.755.71 0 1.757.755 2.349 2.259-2.02 0-3.112-.433-3.112-1.504zm15.212-7.776c0-8.05 1.57-9.286 2.069-9.286.868 0 .98.539.98 3.625 0 3.172-1.37 7.323-3.049 9.602v-3.941zm-34.443 19.706c.422 2.86.819 5.673.819 7.883 0 5.177-1.74 11.228-4.746 11.18-1.145 0-2.124-1.15-2.18-3.134-.111-6.474 2.998-11.985 6.107-15.93zm79.578-3.678c.33.928.484 1.68.484 2.431 0 .868-.325 1.737-.927 1.737-.429 0-.88-.49-.88-1.246 0-.813.72-2.11 1.323-2.922zM172.237 2.05c0 .33-.756 1.839-1.74 4.541-1.032 2.804-2.017 6.794-2.017 11.603 0 2.862.724 6.645 1.318 10.48l-1.748 2.33c-2.774-3.356-4.528-7.131-4.528-13.612 0-9.179 5.624-15.545 8.51-15.545.16 0 .205.048.205.203zm-9.087 27.001c.972 1.297 2.172 2.536 3.595 3.884-2.893 4.593-5.181 10.04-5.181 14.907 0 3.503.825 6.157 3.442 6.157 5.44 0 9.528-11.227 9.528-19.549 0-2.478-.104-4.966-.325-7.447 2.017-2.117 5.118-4.972 5.886-5.24-.326 1.136-.549 2.327-.549 3.45 0 4.536 2.618 8.864 7.69 8.864 4.738 0 8.338-3.842 8.338-9.19 0-.69-.054-1.297-.114-1.942 1.751-.319 3.338-.762 4.854-1.666v10.85c0 1.398.979 1.948 1.899 1.948 1.265 0 1.922-.868 2.844-2.856.759-1.628 2.836-5.35 4.094-7.572.976-1.73 1.518-2.857 1.97-2.857.1 0 .206.264.206.909v9.239c0 2.487 1.3 3.137 2.447 3.137 1.096 0 1.796-.595 2.517-1.57 2.83-3.998 5.831-8.74 7.023-10.806.217-.364.5-.645.706-.645.212 0 .334.116.334.808v9.675c0 1.726.54 2.538 1.898 2.538 1.258 0 2.072-.868 2.565-1.892 1.803-3.726 4.471-8.644 5.615-10.582.274-.431.55-.81.716-.81.214 0 .274.263.274.97v9.177c0 2.487 1.293 3.137 2.44 3.137 1.537 0 2.52-1.084 3.49-2.321 1.801-2.332 4.423-6.474 6.001-9.13.542.865 1.148 1.893 1.64 3.022-1.321 1.57-2.617 3.345-2.617 5.236 0 2 1.4 3.193 2.886 3.193 2.502 0 4.791-2.384 4.791-5.673 0-1.29-.385-2.646-.87-3.936 2.23-2.166 4.902-4.271 6.865-4.758-.93 1.296-1.69 3.133-1.69 5.502 0 4.537 2.62 8.865 7.687 8.865 4.907 0 8.33-3.842 8.33-9.19 0-1.557-.048-1.773-.152-2.415 1.132-.492 2.123-1.247 2.894-1.849.637-.485 1.136-.758 1.514-.758.49 0 .726.38.726 1.082V31.54c0 1.726.538 2.538 1.894 2.538 1.253 0 2.129-.868 2.62-1.892 1.79-3.726 4.409-8.694 5.55-10.582.272-.431.496-.762.659-.762.22 0 .331.165.331.86v8.437c0 2.37 1.08 3.939 3.48 3.939 2.519 0 3.766-2.384 5.95-6.051.105-.222.159-.378.159-.537 0-.486-.439-.76-.873-.76-.49 0-.766.489-2.398 2.264-.32.338-.65.806-1.25.806-.225 0-.38-.258-.38-.585v-9.458c0-2.54-1.156-3.562-2.629-3.562-1.187 0-2.17.484-3.209 2-1.856 2.705-3.754 6.541-4.79 8.474-.113.228-.273.55-.39.55-.118 0-.156-.165-.156-.55v-6.912c0-1.992-.545-3.562-2.674-3.562-2.237 0-3.377 1.512-5.009 2.645-1.05.763-1.968 1.299-2.68 1.621-1.082-2.754-3.106-4.146-4.788-4.103-1.7.058-2.885 1.087-2.885 2.815 0 1.775 1.085 3.01 2.55 3.56.816.323 1.583.382 2.684.382.318 0 .636 0 .866-.06.11.536.055 1.304.055 1.896 0 2.65-1.588 5.285-4.534 5.285-3.05 0-4.84-2.912-4.84-6.258 0-2.543.757-4.646 2.005-6.097.496-.545.881-.872.881-1.367 0-.254-.385-.32-.71-.32-2.063 0-4.357.923-5.94 1.727-2.073 1.081-4.524 2.872-6.538 4.652-.978-2.165-2.174-4.055-2.785-5.515-.221-.596-.368-1.289-.821-1.289-.378 0-.544.38-.814 1.124-.982 2.864-6.21 11.241-7.354 12.376-.109.156-.276.325-.33.325-.102 0-.164-.052-.164-.379v-9.458c0-2.54-1.027-3.562-2.458-3.562-1.2 0-2.22.484-3.21 2-1.801 2.705-3.982 6.645-5.018 8.585-.159.335-.315.439-.369.439-.062 0-.115-.215-.115-.55v-6.912c0-2.54-1.031-3.562-2.45-3.562-1.204 0-2.355.441-3.27 2-2.297 3.837-6.106 9.723-6.821 10.69a.79.79 0 0 1-.33.33c-.095 0-.16-.11-.16-.381v-9.077c0-2.54-1.029-3.562-2.453-3.562-1.968 0-3.051 1.79-3.765 2.92-.979 1.566-2.277 3.675-3.321 5.621-.704 1.3-1.303 2.483-1.522 2.483-.109 0-.109-.49-.109-1.409v-7.232c3.438-3.787 5.555-8.422 5.555-13.5 0-2.922-1.305-4.534-3.325-4.534-3.761 0-6.645 5.83-6.645 12.737v5.617c-1.749 1.081-3.385 1.61-5.4 2.002-1.03-3.02-3.215-4.585-4.948-4.542-1.698.058-2.898 1.087-2.898 2.815 0 2.859 2.83 4.047 5.341 4.047h.713c.1.547.1 1.14.1 1.731 0 2.65-1.571 5.285-4.519 5.285-3.055 0-4.844-2.912-4.844-6.258 0-2.543.762-4.646 2.007-6.097.489-.545.874-1.03.874-1.367 0-.254-.385-.32-.706-.32-2.076 0-6.651 2.767-12.106 8.165-.48-4.32-1.035-8.539-1.035-12.643 0-4.588.93-8.484 1.15-9.606.106-.698.166-1.135.166-1.453 0-.436-.225-.657-.81-.657-4.415 0-14.124 6.974-14.124 17.393 0 4.256.93 7.291 2.566 9.93-.612-.104-1.09-.104-1.538-.104-1.739 0-3.377.43-4.396.647V26.78c0-2.31-.553-5.5-1.536-6.582a.628.628 0 0 0-.434-.159c-.445 0-.984.207-1.583.536-.656.325-1.312.65-1.312.86 0 .107 0 .214.164.485.386.553 1.422 1.622 1.796 4.164-1.855-1.835-3.97-2.65-6.74-2.65-3.276 0-4.262 1.453-4.262 2.92 0 2.808 3.76 4.21 8.51 4.21.866 0 1.844-.162 2.824-.383 0 .864.112 1.632.112 2.275 0 .919.156 1.622.763 1.622.922 0 1.471-1.84 1.577-4.484 1.69-.432 3.435-.806 4.913-.806.703 0 1.584.098 2.451.264zm-10.738-.542c-.915.106-1.477.106-2.448.106-2.13 0-3.702-.811-3.702-1.99 0-.754.377-1.194 1.466-1.194 1.747 0 3.158 1.195 4.684 3.078z" />
                                </g>
                                <path d="M31.457 72h-2.325v-7.05L26.358 72h-1.92l-2.775-6.96V72h-2.25V61.365h3.09l2.924 7.185 2.776-7.185h3.255V72zm10.06 0h-6.75V61.365h6.735V63.6h-4.364v2.025h3.96v2.085h-3.96v2.04h4.38V72zm5.365-2.235h1.38c.87 0 1.583-.26 2.138-.78.555-.52.833-1.285.833-2.295 0-1.02-.278-1.79-.833-2.31-.555-.52-1.267-.78-2.137-.78h-1.38v6.165zM48.352 72h-3.84V61.365h3.855c1.61 0 2.903.48 3.878 1.44.975.96 1.463 2.255 1.463 3.885s-.488 2.922-1.463 3.877C51.27 71.523 49.973 72 48.353 72zm10.45 0h-2.4V61.365h2.4V72zm8.2.225c-1.56 0-2.87-.512-3.93-1.537-1.06-1.026-1.59-2.353-1.59-3.983 0-1.62.535-2.952 1.605-3.997 1.07-1.046 2.365-1.568 3.885-1.568.76 0 1.448.112 2.063.337.615.226 1.112.523 1.493.893.38.37.684.75.914 1.14.23.39.39.795.48 1.215l-2.234.705c-.05-.21-.13-.417-.24-.623a3.076 3.076 0 0 0-.465-.63c-.2-.215-.475-.39-.826-.525a3.272 3.272 0 0 0-1.184-.202c-.8 0-1.505.282-2.115.847-.61.566-.916 1.368-.916 2.408 0 .96.3 1.725.9 2.295.6.57 1.32.855 2.16.855.82 0 1.455-.205 1.906-.615.45-.41.744-.87.885-1.38l2.264.645c-.1.41-.262.815-.487 1.215-.225.4-.53.795-.915 1.185s-.895.707-1.53.953c-.635.245-1.342.367-2.123.367zM81.292 72l-.764-2.16h-4.11L75.651 72h-2.49l4.005-10.635h2.745L83.872 72h-2.58zm-2.79-7.995l-1.304 3.675h2.58l-1.276-3.675zM93.138 72h-6.96V61.365h2.37v8.37h4.59V72zm9.59-2.235h1.38c.87 0 1.582-.26 2.137-.78.555-.52.832-1.285.832-2.295 0-1.02-.277-1.79-.832-2.31-.555-.52-1.267-.78-2.138-.78h-1.38v6.165zm1.47 2.235h-3.84V61.365h3.855c1.61 0 2.902.48 3.877 1.44.975.96 1.462 2.255 1.462 3.885s-.487 2.922-1.462 3.877c-.975.956-2.272 1.433-3.892 1.433zm14.8 0h-6.75V61.365h6.734V63.6h-4.364v2.025h3.96v2.085h-3.96v2.04h4.38V72zm7.24-3.15l2.535-7.485h2.52L127.406 72h-2.444l-3.9-10.635h2.61l2.564 7.485zm9.76 3.15h-2.4V61.365h2.4V72zm8.2.225c-1.56 0-2.87-.512-3.93-1.537-1.06-1.026-1.59-2.353-1.59-3.983 0-1.62.534-2.952 1.605-3.997 1.07-1.046 2.364-1.568 3.885-1.568.76 0 1.447.112 2.062.337.615.226 1.112.523 1.493.893.38.37.684.75.914 1.14.23.39.39.795.48 1.215l-2.234.705c-.05-.21-.13-.417-.24-.623a3.076 3.076 0 0 0-.465-.63c-.2-.215-.475-.39-.826-.525a3.272 3.272 0 0 0-1.185-.202c-.8 0-1.504.282-2.114.847-.61.566-.916 1.368-.916 2.408 0 .96.3 1.725.9 2.295.6.57 1.32.855 2.16.855.82 0 1.455-.205 1.905-.615.45-.41.745-.87.886-1.38l2.264.645c-.1.41-.262.815-.487 1.215-.225.4-.53.795-.915 1.185s-.895.707-1.53.953c-.635.245-1.342.367-2.123.367zM158.621 72h-6.75V61.365h6.735V63.6h-4.364v2.025h3.96v2.085h-3.96v2.04h4.38V72zm10.315-8.025l-2.13.6c-.05-.33-.214-.635-.494-.915s-.705-.42-1.275-.42c-.43 0-.78.112-1.05.337-.27.226-.405.493-.405.803 0 .55.35.89 1.05 1.02l1.424.27c.98.18 1.738.562 2.273 1.147.535.586.802 1.268.802 2.048 0 .89-.354 1.672-1.065 2.348-.71.675-1.664 1.012-2.865 1.012-1.34 0-2.377-.347-3.112-1.042-.735-.696-1.148-1.483-1.238-2.363l2.175-.525c.05.53.258.967.623 1.313.365.345.892.517 1.582.517.46 0 .825-.102 1.095-.308a.961.961 0 0 0 .405-.802c0-.27-.1-.497-.3-.683-.2-.185-.48-.312-.84-.382l-1.455-.27c-.9-.17-1.607-.535-2.122-1.095-.515-.56-.772-1.235-.772-2.025 0-.98.374-1.795 1.125-2.445.75-.65 1.644-.975 2.685-.975.63 0 1.192.087 1.687.263.495.175.887.407 1.177.697.29.29.518.59.683.9.165.31.278.635.338.975zm12.41 8.25c-1.56 0-2.87-.512-3.93-1.537-1.06-1.026-1.59-2.353-1.59-3.983 0-1.62.535-2.952 1.606-3.997 1.07-1.046 2.364-1.568 3.885-1.568.76 0 1.447.112 2.062.337.615.226 1.112.523 1.493.893.38.37.684.75.915 1.14.23.39.39.795.48 1.215l-2.236.705c-.05-.21-.13-.417-.24-.623a3.076 3.076 0 0 0-.465-.63c-.2-.215-.474-.39-.825-.525a3.272 3.272 0 0 0-1.185-.202c-.8 0-1.504.282-2.115.847-.61.566-.915 1.368-.915 2.408 0 .96.3 1.725.9 2.295.6.57 1.32.855 2.16.855.82 0 1.455-.205 1.905-.615.45-.41.745-.87.885-1.38l2.266.645c-.1.41-.263.815-.488 1.215-.225.4-.53.795-.915 1.185s-.895.707-1.53.953c-.635.245-1.342.367-2.123.367zm9.43-5.55c0 1.04.308 1.835.923 2.385.615.55 1.332.825 2.153.825a3.1 3.1 0 0 0 2.144-.825c.61-.55.915-1.345.915-2.385 0-1.04-.304-1.837-.915-2.392a3.085 3.085 0 0 0-2.145-.833c-.82 0-1.537.277-2.152.832-.615.556-.922 1.353-.922 2.393zm-2.46.015c0-1.65.538-2.987 1.613-4.012 1.075-1.026 2.382-1.538 3.922-1.538s2.845.515 3.916 1.545c1.07 1.03 1.605 2.365 1.605 4.005 0 1.64-.535 2.972-1.605 3.998-1.07 1.025-2.375 1.537-3.916 1.537-1.54 0-2.847-.512-3.922-1.537-1.075-1.026-1.613-2.358-1.613-3.998zM214.113 72h-2.326v-7.05L209.012 72h-1.92l-2.775-6.96V72h-2.25V61.365h3.09l2.925 7.185 2.775-7.185h3.256V72zm5.695-5.865h1.38c.45 0 .814-.122 1.095-.368.28-.245.42-.572.42-.982 0-.42-.138-.752-.413-.997-.275-.246-.642-.368-1.102-.368h-1.38v2.715zm1.62 2.04h-1.636V72h-2.37V61.365h4.006c1.08 0 1.957.32 2.632.96.675.64 1.012 1.455 1.012 2.445 0 1.01-.337 1.83-1.012 2.46-.675.63-1.552.945-2.632.945zM233.903 72l-.766-2.16h-4.11l-.764 2.16h-2.49l4.005-10.635h2.745L236.483 72h-2.58zm-2.79-7.995l-1.305 3.675h2.58l-1.275-3.675zM248.028 72h-2.505l-4.38-6.99V72h-2.356V61.365h2.88l3.99 6.465v-6.465h2.37V72zm5.695 0h-2.4V61.365h2.4V72zm10.044 0h-6.75V61.365h6.736V63.6h-4.365v2.025h3.96v2.085h-3.96v2.04h4.38V72zm10.315-8.025l-2.13.6c-.05-.33-.214-.635-.495-.915-.28-.28-.704-.42-1.274-.42-.43 0-.78.112-1.05.337-.27.226-.405.493-.405.803 0 .55.35.89 1.05 1.02l1.424.27c.98.18 1.738.562 2.273 1.147.535.586.802 1.268.802 2.048 0 .89-.354 1.672-1.065 2.348-.71.675-1.664 1.012-2.864 1.012-1.34 0-2.378-.347-3.113-1.042-.735-.696-1.148-1.483-1.238-2.363l2.175-.525c.05.53.258.967.623 1.313.365.345.892.517 1.582.517.46 0 .825-.102 1.096-.308a.961.961 0 0 0 .404-.802c0-.27-.1-.497-.3-.683-.2-.185-.48-.312-.84-.382l-1.454-.27c-.9-.17-1.608-.535-2.123-1.095-.515-.56-.773-1.235-.773-2.025 0-.98.375-1.795 1.125-2.445.75-.65 1.645-.975 2.685-.975.63 0 1.193.087 1.688.263.495.175.887.407 1.178.697.29.29.517.59.682.9.165.31.277.635.337.975z" fill="#888B8D"/>
                            </g>
                        </svg>
                    </div>
                    <div className="mdc-nav__center">
                        <ul>
                            {navItems}
                        </ul>
                    </div>
                    <div className="mdc-nav__right">
                        <i className="iconcss icon-search"></i>
                        <hr/>
                        <svg width={33} height={21}>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M32.43 21H.57A.561.561 0 0 1 0 20.447V.553C0 .247.255 0 .569 0h31.862c.314 0 .569.247.569.553v19.894a.561.561 0 0 1-.57.553z"
                                fill="#F5F5F5"
                              />
                              <g fill="#FF4B55">
                                <path d="M32.538 1.63H0V.57C0 .264.251.017.561.017h31.416c.31 0 .56.247.56.552V1.63zM0 6.468h32.538v1.613H0zM0 3.243h32.538v1.613H0zM32.538 11.306H.56A.556.556 0 0 1 0 10.755V9.694h32.538v1.612zM0 16.145h32.538v1.613H0zM31.977 20.983H.56A.556.556 0 0 1 0 20.43v-1.06h32.538v1.06a.556.556 0 0 1-.561.552zM0 12.919h32.538v1.613H0z" />
                              </g>
                              <path
                                d="M14.444 0H.556A.547.547 0 0 0 0 .538v9.924c0 .297.249.538.556.538h13.888c.307 0 .556-.24.556-.538V.538A.547.547 0 0 0 14.444 0z"
                                fill="#41479B"
                              />
                              <g fill="#F5F5F5">
                                <path d="M1.54 1.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L1.5 1.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM1.54 3.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L1.5 3.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM1.54 5.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L1.5 5.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM1.54 7.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L1.5 7.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM1.54 9.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L1.5 9.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM3.54 2.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L3.5 2.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM3.54 4.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L3.5 4.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM3.54 6.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L3.5 6.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM3.54 8.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L3.5 8.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM4.54 1.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L4.5 1.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM4.54 3.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L4.5 3.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM4.54 5.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L4.5 5.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM4.54 7.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L4.5 7.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM4.54 9.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L4.5 9.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM6.54 2.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L6.5 2.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM6.54 4.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L6.5 4.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM6.54 6.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L6.5 6.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM6.54 8.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L6.5 8.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM7.54 1.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L7.5 1.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM7.54 3.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L7.5 3.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM7.54 5.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L7.5 5.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM7.54 7.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L7.5 7.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM7.54 9.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L7.5 9.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM9.54 2.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L9.5 2.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM9.54 4.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L9.5 4.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM9.54 6.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L9.5 6.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM9.54 8.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05L9.5 8.798l-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM10.54 1.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM10.54 3.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM10.54 5.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM10.54 7.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM10.54 9.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM12.54 2.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM12.54 4.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM12.54 6.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM12.54 8.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM13.54 1.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM13.54 3.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM13.54 5.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM13.54 7.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0zM13.54 9.03l.1.315.318.003c.04 0 .058.055.025.08l-.255.197.095.317c.013.04-.032.074-.065.05l-.258-.193-.258.192c-.033.025-.078-.008-.065-.05l.095-.316-.255-.197c-.033-.025-.016-.08.025-.08l.317-.003.1-.314a.042.042 0 0 1 .081 0z" />
                              </g>
                            </g>
                          </svg>
                    </div>
                </div>
                <div className="mdc-nav__hoverbar">
                    <div className="mdc-nav__hoverlines">
                        <div style={ (takeoverOpen) ? lineAnimation : null } className="mdc-nav__hoverline"></div>
                    </div>
                </div>
                    <div className="mdc-nav__hovermain" onMouseOver={ this.openTakeover } onMouseOut={this.closeTakeover}>
                        <div className="mdc-nav__hovermainfeatured">
                            <h3>Featured Content</h3>
                            <ul>
                                <li>Laminoscopy</li>
                                <li>Morter Breadfist</li>
                                <li>Pentultimate Bigness</li>
                                <li>Laminoscopy</li>
                                <li>Morter Breadfist</li>
                                <li>Pentultimate Bigness</li>
                            </ul>
                        </div>
                        <div className="mdc-nav__hovermaincolumn">
                            <ul>
                                { specialtiesItems }
                            </ul>
                        </div>
                    </div>
            </nav>
        );
    }
}