import { FormControl, MenuItem, Select } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const Filter = styled(Select)({
    color: '#fff',
    height: 40,
    fontSize: 12,
    background: ' linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(274.42deg, #495c89 0%, #3c60b3 67.41%, #967aa1 124.45%)',
    width: 120,
    borderRadius: 50
});

export const MenuItemCustom = styled(MenuItem)({
    color: '#000',
    height: 40,
    fontSize: 12,

});

export const FormControlCustom = styled(FormControl)({
    "fieldset": {
        border: 'none'
    },
});