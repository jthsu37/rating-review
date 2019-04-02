import Enzyme, {configure, shallow} from 'enzyme'
// import shallow from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
// import 'jest-enzyme';
// import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
// global.shallow = shallow
export {shallow};
export default Enzyme;
