import { Observable } from 'knockout';
import SettingOption from '../SettingOption';
import Settings from '../Settings';
import Filter from './Filter';

export default abstract class SaveableFilter<T = any> extends Filter<T> {
    settingOptions: SettingOption<string>[];

    constructor(label: string, selectedValue: Observable<T>, public settingName: string, settingOptionsOverride?: SettingOption<string>[]) {
        super(label, selectedValue);
        this.settingOptions = Array.isArray(settingOptionsOverride) ? settingOptionsOverride : this.settingOptionsFromDisplayOptions();
    }

    public static isSaveableFilter(u: unknown): u is SaveableFilter {
        const uAsSaveableFilter = u as SaveableFilter;
        return Filter.isFilter(u) && uAsSaveableFilter.settingName !== undefined && uAsSaveableFilter.settingOptions !== undefined;
    }

    public updateSelectedValue(v: T) {
        this.selectedValue(v);
        Settings.setSettingByName(this.settingName, String(v));
    }

    private settingOptionsFromDisplayOptions(): SettingOption<string>[] {
        return this.getDisplayOptions()().map((o) => new SettingOption(typeof o.text === 'string' ? o.text : o.text(), String(o.value)));
    }
}
